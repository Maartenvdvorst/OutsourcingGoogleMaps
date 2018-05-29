-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2018 at 11:02 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `map`
--

-- --------------------------------------------------------

--
-- Table structure for table `markers`
--

CREATE TABLE `markers` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lat` varchar(50) NOT NULL,
  `lng` varchar(50) NOT NULL,
  `Eigenschap` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `markers`
--

INSERT INTO `markers` (`id`, `name`, `lat`, `lng`, `Eigenschap`) VALUES
(3, 'asa', '51.45604794618397', '5.48188', 'testtesttest'),
(32, 'Array', '51.452411', '5.47751', ''),
(46, 'asdf', '51.46230495483713', '5.47382', 'fuckface ###'),
(47, 'teringg zeg', '51.45904298226109', '5.45346', ''),
(48, 'forfucksake', '51.45477344226269', '5.49563', 'null ###'),
(49, 'homooo', '51.46139587008943', '5.49716', 'bootyhole ###bootyholetwee ###'),
(50, 'fuckery', '51.446366610350424', '5.48171', ''),
(51, 'ffff', '51.45123427890291', '5.49991', ''),
(52, 'fff', '51.45160869345099', '5.49991', ''),
(53, 'awesome', '51.459042860769884', '5.50497', 'teringzeg ###'),
(54, 'karen', '51.451929617762545', '5.50763', ''),
(55, 'neeen', '51.46348139057085', '5.463000613647409', 'superneen ###'),
(56, '2323', '51.45027148453675', '5.463258105712839', ''),
(57, '12', '51.4787055788924', '5.331695058762648', ''),
(58, 'ismooi', '51.44518390926953', '5.472025962566931', 'ismooi ###');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
