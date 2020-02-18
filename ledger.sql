-- -----------------------------------------------------
-- Schema ledger_account
-- -----------------------------------------------------
-- CREATE SCHEMA IF NOT EXISTS ledger_account DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE DATABASE IF NOT EXISTS ledger_account CHARACTER SET utf8 COLLATE utf8_general_ci;

USE ledger_account;

-- -----------------------------------------------------
-- Table ledger_account.la_person
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ledger_account.la_person (
    lap_id INT(8) NOT NULL AUTO_INCREMENT,
    lap_fname VARCHAR(125) NOT NULL,
    lap_lname VARCHAR(125) NOT NULL,
    lap_nname VARCHAR(255) NULL DEFAULT NULL,
    lap_pfname_id int(2) NOT NULL,
    lap_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (lap_id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE utf8_general_ci;

-- -----------------------------------------------------
-- Table ledger_account.la_book
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ledger_account.la_book (
    lab_id INT(8) NOT NULL AUTO_INCREMENT,
    lab_token varchar(20) NOT NULL,
    lab_amount DOUBLE NOT NULL,
    lab_income DOUBLE NOT NULL,
    lab_expense DOUBLE NOT NULL,
    lab_descript varchar(255) NULL DEFAULT NULL,
    lab_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    lab_lap_id INT(8) NOT NULL,
    PRIMARY KEY (lab_id),
    FOREIGN KEY (lab_lap_id) REFERENCES ledger_account.la_person(lap_id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE utf8_general_ci;

-- -----------------------------------------------------
-- Table ledger_account.la_list
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ledger_account.la_list (
    lal_id INT(8) NOT NULL AUTO_INCREMENT,
    lal_type TINYTEXT NOT NULL,
    lal_money DOUBLE NOT NULL,
    lal_descript varchar(255) NULL DEFAULT NULL,
    lal_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    lal_lab_id INT(8) NOT NULL,
    PRIMARY KEY (lal_id),
    FOREIGN KEY (lal_lab_id) REFERENCES ledger_account.la_book(lab_id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE utf8_general_ci;

-- -----------------------------------------------------
-- Table ledger_account.la_extension
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ledger_account.la_extension (
    lae_id INT(8) NOT NULL AUTO_INCREMENT,
    lae_descript varchar(255) NULL DEFAULT NULL,
    lal_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (lae_id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE utf8_general_ci;

-- -----------------------------------------------------
-- Table ledger_account.la_Mediator
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ledger_account.la_Mediator (
    lam_id INT(8) NOT NULL AUTO_INCREMENT,
    lam_use TINYTEXT NOT NULL DEFAULT 'y',
    lam_descript varchar(255) NULL DEFAULT NULL,
    lam_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    lam_lab_id INT(8) NOT NULL,
    lam_lae_id INT(8) NOT NULL,
    PRIMARY KEY (lam_id),
    FOREIGN KEY (lam_lab_id) REFERENCES ledger_account.la_book(lab_id),
    FOREIGN KEY (lam_lae_id) REFERENCES ledger_account.la_extension(lae_id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE utf8_general_ci;