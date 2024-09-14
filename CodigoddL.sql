-- Create table: vivero
CREATE TABLE vivero (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre TEXT NOT NULL,
    cantidad_lotes INTEGER DEFAULT 0,
    cantidad_plantas INTEGER DEFAULT 0,
    plantas_muertas INTEGER DEFAULT 0,
    fecha TIMESTAMPTZ DEFAULT NOW()
);

-- Create table: lote_semillas
CREATE TABLE lote_semillas (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    fecha_plantacion DATE NOT NULL,
    cantidad_semillas_g INTEGER NOT NULL,
    cantidad_plantas_individuales INTEGER,
    fecha_trasplante DATE,
    variedad_planta_id BIGINT NOT NULL,
    vivero_id BIGINT REFERENCES vivero(id)
);

-- Create table: variedad_plantas_invernadero
CREATE TABLE variedad_plantas_invernadero (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    especie TEXT NOT NULL,
    humedad REAL NOT NULL,
    temperatura REAL NOT NULL,
    tipo_tierra TEXT NOT NULL,
    exposicion_luz TEXT NOT NULL,
    frecuencia_riego TEXT NOT NULL,
    ph_suelo REAL NOT NULL,
    estado_crecimiento TEXT
);

-- Create table: planta_trasplantada
CREATE TABLE planta_trasplantada (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    fecha_transplante_bolsa DATE NOT NULL,
    fecha_transplante_paramo DATE,
    ubicacion_geografica TEXT,
    ecosistema_id BIGINT,
    lote_semillas_id BIGINT REFERENCES lote_semillas(id)
);

-- Create table: ecosistemas_paramo
CREATE TABLE ecosistemas_paramo (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre_ecosistema TEXT NOT NULL,
    altura REAL NOT NULL,
    ubicacion_geografica TEXT NOT NULL,
    planta_nativa TEXT NOT NULL
);

-- Create table: metricas_ecosistema
CREATE TABLE metricas_ecosistema (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    temperatura REAL,
    humedad REAL,
    imagen_satelital TEXT,
    fecha_hora TIMESTAMPTZ DEFAULT NOW(),
    ecosistema_id BIGINT REFERENCES ecosistemas_paramo(id)
);

-- Create table: condiciones_vivero
CREATE TABLE condiciones_vivero (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    temperatura REAL,
    humedad REAL,
    fecha TIMESTAMPTZ DEFAULT NOW(),
    vivero_id BIGINT REFERENCES vivero(id)
);