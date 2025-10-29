-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-10-2025 a las 23:26:24
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `notas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `documento_identidad` varchar(20) NOT NULL,
  `primer_nombre` varchar(50) NOT NULL,
  `segundo_nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `genero` enum('Masculino','Femenino','Otro') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`documento_identidad`, `primer_nombre`, `segundo_nombre`, `apellido`, `fecha_nacimiento`, `genero`) VALUES
('1001', 'Laura', 'Isabel', 'Gómez', '2006-03-12', 'Femenino'),
('1003', 'Mariana', NULL, 'Ramírez', '2007-01-18', 'Femenino'),
('1004', 'Santiago', 'David', 'Castaño', '2006-09-03', 'Masculino'),
('1005', 'Valentina', 'Andrea', 'Torres', '2005-12-09', 'Femenino'),
('1006', 'Mateo', 'Alejandro', 'López', '2007-05-14', 'Masculino'),
('1007', 'Camila', 'Sofía', 'Martínez', '2006-10-27', 'Femenino'),
('1008', 'Felipe', 'Esteban', 'García', '2005-02-21', 'Masculino'),
('1009', 'Sara', 'Lucía', 'Mendoza', '2007-08-30', 'Femenino'),
('1010', 'Daniel', NULL, 'Ruiz', '2006-11-04', 'Masculino'),
('1011', 'Paula', 'Fernanda', 'Castro', '2005-04-16', 'Femenino'),
('1012', 'Tomás', 'Eduardo', 'Moreno', '2007-06-22', 'Masculino'),
('1013', 'Isabella', 'María', 'Hernández', '2006-01-30', 'Femenino'),
('1014', 'Sebastián', 'José', 'Restrepo', '2005-09-11', 'Masculino'),
('1015', 'Ana', 'Carolina', 'Vélez', '2007-12-05', 'Femenino');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`documento_identidad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
