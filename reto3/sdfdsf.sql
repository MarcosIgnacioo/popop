
USE restaurante;
DELIMITER $$
CREATE PROCEDURE insertIntoClientes(IN nombre_cliente VARCHAR(256), IN email VARCHAR(256), IN telefono VARCHAR(256), IN curp VARCHAR(256), IN frecuencia_compra VARCHAR(256))
BEGIN
	INSERT INTO clientes(nombre_cliente, email, telefono, curp, frecuencia_compra)
    VALUES(
       nombre_cliente, email, telefono, curp, frecuencia_compra
    );
    SELECT "Registro de cliente exitoso" as mensaje;
END$$
DELIMITER ;
CALL insertIntoClientes("123", "correoQ", "6123671627", "2132313asdasd", "Nuevo");


DELIMITER $$
CREATE PROCEDURE insertIntoPlatillos(IN nombre_platillo VARCHAR(256), IN descripcion_platillo VARCHAR(256), IN precio DECIMAL(10,2), IN presentacion VARCHAR(256))
BEGIN
	INSERT INTO platillos(nombre_platillo, descripcion_platillo, precio, presentacion)
    VALUES(
       nombre_platillo, 
       descripcion_platillo,
       precio, 
       presentacion
    );
    SELECT "Registro de platillo exitoso" as mensaje;
END$$
DELIMITER ;

CALL insertIntoPlatillos("pwoo", "holaaa", 213.23, "Orden");


DELIMITER $$
CREATE PROCEDURE insertIntoBebidas(IN nombre_bebida VARCHAR(256), IN descripcion VARCHAR(256), IN precio DECIMAL(10,2), IN tamaño VARCHAR(256), IN SKU VARCHAR(256))
BEGIN
	INSERT INTO bebidas(nombre_bebida, descripcion, precio, tamaño, SKU)
    VALUES(
			nombre_bebida, descripcion, precio, tamaño, SKU
    );
    SELECT "Registro de bebida exitoso" as mensaje;
END$$
DELIMITER ;

CALL insertIntoBebidas("pwoo", "holabebidaaa", 213.23, "Chico", "JHSAHDJ2323");



DELIMITER $$
CREATE PROCEDURE insertIntoPostres(IN nombre_postre VARCHAR(256), IN descripcion VARCHAR(256), IN precio DECIMAL(10,2), IN sabor VARCHAR(256), IN presentacion VARCHAR(256))
BEGIN
	INSERT INTO postres(nombre_postre, descripcion, precio, sabor, presentacion)
    VALUES(
			nombre_postre, descripcion, precio, sabor, presentacion
    );
    SELECT "Registro de postre exitoso" as mensaje;
END$$
DELIMITER ;

CALL insertIntoPostres("postre", "desc", 213.23, "rico", "Pieza");

