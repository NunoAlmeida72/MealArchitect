# Meal Architect Backend

Backend do projeto Meal Architect, desenvolvido em Java com Spring Boot 3.x.

## Pré-requisitos

- Java 17 ou superior (JDK 25 recomendado se já instalado)
- Maven 3.x
- PostgreSQL (Base de dados criada com o nome `mealarchitect`)

## Configuração da Base de Dados

Antes de iniciar, certifica-te que tens o PostgreSQL a correr e a base de dados criada:

```sql
CREATE DATABASE mealarchitect;
```

As credenciais estão configuradas no ficheiro `src/main/resources/application.properties`:
- **Username**: `postgres`
- **Password**: `password`

(Altera estas credenciais no ficheiro se a tua configuração local for diferente).

## Como Compilar e Construir

Para compilar o projeto e gerar o ficheiro JAR:

```bash
mvn clean package
```

Para correr os testes (se existirem) e compilar:
```bash
mvn clean install
```

## Como Executar

### Via Maven (Recomendado para desenvolvimento)
```bash
mvn spring-boot:run
```

### Via JAR (Produção)
Após o build, o JAR será gerado na pasta `target/`. Podes executá-lo com:

```bash
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

## Estrutura do Projeto

- `src/main/java`: Código fonte Java
- `src/main/resources`: Ficheiros de configuração (application.properties) e estáticos
