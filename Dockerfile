FROM node:16.10.0

WORKDIR /app/site
COPY . /app/site

RUN yarn

CMD ["build"]
ENTRYPOINT ["yarn"]
