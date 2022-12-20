CREATE DATABASE IF NOT EXISTS `storeDB`;
USE `storeDB`;

-- Copiando estrutura para tabela storedb.tb_units
CREATE TABLE `tb_units` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `description` varchar(50) NOT NULL
);

-- Copiando estrutura para tabela storedb.tb_items
CREATE TABLE IF NOT EXISTS `tb_items` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `description` varchar(50) NOT NULL,
  `unit_id` int DEFAULT NULL,
  `cost` double NOT NULL,
  `quantity` int NOT NULL,
  FOREIGN KEY (`unit_id`) REFERENCES `tb_units` (`id`)
) ;

-- Copiando dados para a tabela storedb.tb_units: ~0 rows (aproximadamente)
INSERT INTO `tb_units` (`id`, `description`) VALUES
	(1, 'kg'),
	(2, 'unid'),
	(3, 'litro');
