# Securent

Make sure to have Java 17, Maven 3.8+, and Git installed:

```
java -version
mvn -version
git --version
```

---

## Set Up

### 1. Clone the repository
```
git clone <your-git-repo-url>
cd ASE_SMH_engR
```

### 2. Build the project using Maven
```
./mvnw clean install
```

### 3. Run the service locally
Default port is `localhost:8080`
```
./mvnw spring-boot:run
```

---

## Auth Endpoints

```
curl -X POST http://localhost:8080/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "admin123"
  }'
```

should return
```
ey_____ some jwt token
```

Incorrect login:
```
curl -X POST http://localhost:8080/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "user",
    "password": "wrongpass"
  }'
```

response should be `"Invalid username or password"`

For next people using JWT_TOKEN as the auth for protected endpoints:

```
curl -X GET http://localhost:8080/api/protected \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

---

## User Endpoints

### /user/renter/new

Registers a new renter account.  
Takes in username, email, password, and role.  
If the username or email already exists, it returns a 400 error.

```
curl -X POST http://localhost:8080/user/renter/new \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newRenter",
    "email": "renter@example.com",
    "password": "securePswd123",
    "role": "RENTER"
  }'
```

should return
```
{"id":1,"username":"newRenter","email":"renter@example.com","role":"RENTER"}
```

---

### /user/agent/new

Registers a new agent account.  
Takes in username, email, password, and role.  
If the username or email already exists, it returns a 400 error.

```
curl -X POST http://localhost:8080/user/agent/new \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newAgent",
    "email": "agent@example.com",
    "password": "securePswd123",
    "role": "AGENT"
  }'
```

should return
```
{"id":2,"username":"newAgent","email":"agent@example.com","role":"AGENT"}
```

---

### /user/{userID}/verify-email

Stub endpoint for email verification.  
Currently returns a placeholder message until email service is connected.

```
curl -X POST http://localhost:8080/user/1/verify-email
```

should return
```
"To be connected to endpoint"
```

---

## Testing & Style

Run tests:
```
./mvnw test
```

Run style check:
```
./mvnw checkstyle:check
```

You can find already generated reports in the reports folder at checkstyle.html and site/index.html
