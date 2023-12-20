import { verifyRestaurantData, verifyUserData } from "@/lib/register";
import styles from "@/styles/RegisterPage.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

async function handleRestaurantRegister(props: {
  restaurant: {
    name: string;
    location: string;
    phone: string;
    contacts: string;
    description: string;
    schedule: string;
    ownerEmail: string;
  };
}) {
  try {
    verifyRestaurantData(props);

    const res = await fetch(
      `http://localhost:3000/api/register/restaurant/${props.restaurant.ownerEmail}`,
      {
        method: "POST",
        body: JSON.stringify(props),
        headers: { "Content-Type": "application/json" },
      }
    );

    const message = await res.json();

    console.log(message);
    if (res.ok) {
      alert(message);
      window.location.href = "/api/auth/signin";
    }
  } catch (error: any) {
    alert(error.message);
  }

}

async function handleUserRegister(props: {
  user: {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
  };
}) {
  try {
    verifyUserData(props);

    const res = await fetch(
      `http://localhost:3000/api/register/user/${props.user.email}`,
      {
        method: "POST",
        body: JSON.stringify(props),
        headers: { "Content-Type": "application/json" },
      }
    );
    const message = await res.json();

    console.log(message);
    if (res.ok) {
      alert(message);
      window.location.href = "/api/auth/signin";
    }
  } catch (error: any) {
    alert(error.message);
  }
}

export default function RegisterPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const data = router.query;

  const [email, setEmail] = useState(data.email);
  const [name, setName] = useState(data.name);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState("");

  return (
    <div className={styles.page}>
      <div className={styles.register_div}>
        <form
          className={styles.form}
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            handleUserRegister({
              user: {
                email: String(email),
                name: String(name),
                password: String(password),
                confirmPassword: String(confirmPassword),
              },
            });
          }}
        >
          <h1 className={styles.h1}>Informações pessoais</h1>
          <div className={styles.div_inputs}>
            <span className={styles.span_input}>
              <label htmlFor="">Email: *</label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
                className={styles.input}
                type="email"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Nome: *</label>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Senha: *</label>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className={styles.input}
                type="password"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Repita sua senha: *</label>
              <input
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                className={styles.input}
                type="password"
                placeholder="Digite aqui"
              />
            </span>
          </div>

          <button className={styles.button} type="submit">
            Registrar Usuário
          </button>
        </form>
      </div>

      <div className={styles.register_div}>
        <form
          className={styles.form}
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            if (session && session.user) {
              handleRestaurantRegister({
                restaurant: {
                  name: String(restaurantName),
                  location: String(location),
                  phone: String(phone),
                  contacts: String(contact),
                  description: String(description),
                  schedule: String(schedule),
                  ownerEmail: String(session.user.email),
                },
              });
            } else {
              alert("Faça login para registrar restaurante!");
              router.push(`/api/auth/signin`);
            }
          }}
        >
          <h1 className={styles.h1}>Informações do Restaurante</h1>

          <div className={styles.div_inputs}>
            <span className={styles.span_input}>
              <label htmlFor="">Nome: *</label>
              <input
                onChange={(event) => {
                  setRestaurantName(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Endereço: *</label>
              <input
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Telefone: *</label>
              <input
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Contato: *</label>
              <input
                onChange={(event) => {
                  setContact(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
            <span className={styles.span_input}>
              <label htmlFor="">Descriçã: *</label>
              <input
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>{" "}
            <span className={styles.span_input}>
              <label htmlFor="">Horário: *</label>
              <input
                onChange={(event) => {
                  setSchedule(event.target.value);
                }}
                className={styles.input}
                type="text"
                placeholder="Digite aqui"
              />
            </span>
          </div>
          <button className={styles.button} type="submit">
            Registrar restaurante
          </button>
        </form>
      </div>
    </div>
  );
}
