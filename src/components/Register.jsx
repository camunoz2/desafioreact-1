import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";
import SuccessModal from "./SuccessModal";
import { validateEmail } from "../utils/validateEmail";

// eslint-disable-next-line react/prop-types
export default function Register({ navHeight, footerHeight }) {
  const [email, setEmail] = useState({ emailName: "", isValid: false });
  const [pass, setPass] = useState({
    passOne: "",
    passTwo: "",
    isValid: true,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (email.isValid && pass.isValid) {
      setSuccess(true);
    }
  }, [email.isValid, pass.isValid]);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const isEmailValid = validateEmail(email.emailName);
    setEmail({ ...email, isValid: isEmailValid });
    validatePassword(pass);
    setIsFormSubmitted(true);
  }

  function validatePassword(pass) {
    if (pass.passOne !== pass.passTwo) {
      setErrorMessage("Los pass son distintos, revisalos");
      setPass({ ...pass, isValid: false });
    } else if (pass.passOne.length < 6) {
      setErrorMessage("El password debe tener mas de 6 caracteres!");
      setPass({ ...pass, isValid: false });
    } else {
      setErrorMessage("");
      setPass({ ...pass, isValid: true });
    }
  }

  return (
    <Container
      style={{
        alignContent: "center",
        minHeight: `calc(100vh - ${navHeight} - ${footerHeight})`,
      }}
    >
      {success && (
        <SuccessModal
          isOpen={true}
          msg={`Registrado correctamente con el email ${email.emailName}`}
        />
      )}
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                placeholder="Ingresa tu email"
                onChange={(e) =>
                  setEmail({ ...email, emailName: e.target.value })
                }
              />
              {isFormSubmitted && (
                <Alert variant={email.isValid ? "primary" : "danger"}>
                  {email.isValid ? "Esta ok" : "Revisa que el email sea valido"}
                </Alert>
              )}
            </Form.Group>
            <hr />
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Tu password</Form.Label>
              <Form.Control
                onChange={(e) => setPass({ ...pass, passOne: e.target.value })}
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRepeatPassword">
              <Form.Label>Confirma tu password</Form.Label>
              <Form.Control
                onChange={(e) => setPass({ ...pass, passTwo: e.target.value })}
                required
                type="password"
                placeholder="Password"
              />
              {isFormSubmitted && (
                <Alert variant={pass.isValid ? "primary" : "danger"}>
                  {pass.isValid ? "El pass esta ok!" : errorMessage}
                </Alert>
              )}
            </Form.Group>
            <hr />
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
