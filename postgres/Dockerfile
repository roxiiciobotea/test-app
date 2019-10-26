FROM library/postgres
ENV POSTGRES_USER dbuser
ENV POSTGRES_PASSWORD dbpass
ENV POSTGRES_DB testdb

WORKDIR /
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432