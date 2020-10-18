FROM ruby:2.7.2

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" \
      | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq \
    && apt-get install -y --no-install-recommends \
        netcat nodejs yarn\
    && rm -rf /var/lib/apt/lists/*

WORKDIR /poke-trader

COPY Gemfile /poke-trader/Gemfile

RUN bundle install

COPY . /poke-trader

# Add a script to be executed every time the container starts.
RUN chmod +x /poke-trader/docker-entrypoint.sh
ENTRYPOINT ["/poke-trader/docker-entrypoint.sh"]

