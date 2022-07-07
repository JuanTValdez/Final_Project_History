DROP TABLE IF EXISTS facts CASCADE;

CREATE TABLE facts(
id SERIAL PRIMARY KEY,
fact_date VARCHAR NOT NULL,
category character varying(255) NOT NULL,
fact_summary VARCHAR NOT NULL,
fact_long_1 VARCHAR NOT NULL,
fact_long_2 VARCHAR NOT NULL,
image_url_1 VARCHAR,
image_url_2 VARCHAR 
);