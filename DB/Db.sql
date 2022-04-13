-- -----------------------------------------------------
-- Table `mydb`.`todolist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolist` (
  `idtodolist` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(255) NULL,
  `date` DATE NULL,
  PRIMARY KEY (`idtodolist`))
ENGINE = InnoDB;

INSERT INTO todolist (idtodolist, title, description, date) VALUES (1, 'TEST', 'DESCRIPTION TEST','2022-04-13');