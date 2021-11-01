FROM node:lts-alpine as app
ARG NODE_ENV=production
ARG REACT_APP_TITLE
ARG REACT_APP_SUBTITLE
ARG REACT_APP_INCIDENT_MAP
ARG REACT_APP_OPENWEATHER_API_KEY
ARG REACT_APP_OPENWEATHER_URL
ARG REACT_APP_OPENWEATHER_ICON_URL 
RUN npm install -g npm@latest
WORKDIR /app
COPY ./app/package* ./
RUN npm install --loglevel error
COPY ./app .
RUN npm run build


FROM node:lts-alpine as server
ARG NODE_ENV=production
RUN npm install -g npm@latest
WORKDIR /server
COPY ./server/package* ./
RUN npm install
COPY ./server .


FROM node:lts-alpine as production
ARG NODE_ENV=production
ENV SERVE_REACT=true
WORKDIR /app
COPY --from=app /app/build .
WORKDIR /server
COPY --from=server /server .
CMD npm run serve
