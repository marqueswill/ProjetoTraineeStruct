`use session`;

import styles from "@/styles/Profile.module.css";
import { Restaurant, User, defaultUser } from "@/types/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

async function handleUserEditSubmit(props: {
  id: number;
  email: string;
  name: string;
  password: string;
  image: string;
}) {
  const res = await fetch(`http://localhost:3000/api/user/owner/${props.id}`, {
    method: "PUT",
    body: JSON.stringify(props),
    headers: { "Content-Type": "application/json" },
  });

  const message = await res.json();

  console.log(message);
  if (res.ok) {
    alert(message);
  }
}

async function handleRestaurantEditSubmit(props: {
  ownerEmail: string;
  name: string;
  location: string;
  phone: string;
  contacts: string;
  description: string;
  schedule: string;
}) {
  const res = await fetch(
    `http://localhost:3000/api/restaurant/${props.ownerEmail}`,
    {
      method: "PUT",
      body: JSON.stringify(props),
      headers: { "Content-Type": "application/json" },
    }
  );

  const message = await res.json();

  console.log(message);
  if (res.ok) {
    alert(message);
  }
}

export const getServerSideProps: GetServerSideProps<{
  user: User;
}> = async (context) => {
  const ownerId = context.query.id;
  const res = await fetch(`http://localhost:3000/api/user/owner/${ownerId}`, {
    method: "GET",
  });

  let user = defaultUser;
  if (res.ok) {
    user = await res.json();
  }

  return { props: { user } };
};

export default function UserMenuPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { data: session } = useSession();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      alert("Faça login para continuar!");
      router.push(`/api/auth/signin`);
    },
  });

  if (status === `loading`) {
    return (
      <div>
        <h1>Faça Login!</h1>
      </div>
    );
  } else {
    if (session && session.user) {
      const [modoEdicao, setModoEdicao] = useState(false);
      const isOwner = session.user.isOwner;

      const userId = user.id;
      const [email, setEmail] = useState(user.email);
      const [name, setName] = useState(user.name);
      const [password, setPassword] = useState(user.password);
      const [image, setImage] = useState(user.image);

      const [restaurantName, setRestaurantName] = useState(
        user.restaurant?.name
      );
      const [location, setLocation] = useState(user.restaurant?.location);
      const [phone, setPhone] = useState(user.restaurant?.phone);
      const [contact, setContact] = useState(user.restaurant?.contacts);
      const [description, setDescription] = useState(
        user.restaurant?.description
      );
      const [schedule, setSchedule] = useState(user.restaurant?.schedule);

      return (
        <div>
          {!modoEdicao ? (
            <div className={styles.div_maior}>
              <div className={styles.div_sub} style={{marginRight: "25px"}}>
                <h1 className={styles.h1_prin}>Dados Pessoais:</h1>
                <div className={styles.div_data}>
                  <span>
                    <img src={image} alt="" className={styles.img}/>
                  </span>
                  <span className={styles.span_termo}><b>ID:</b> {userId}</span>
                  <span className={styles.span_termo}><b>Email:</b> {email}</span>
                  <span className={styles.span_termo}><b>Nome:</b> {name}</span>
                </div>
              </div>
              {isOwner && (
                <div className={styles.div_sub}>
                  <h1 className={styles.h1_prin}>Dados Restaurante:</h1>
                  <div className={styles.div_data}>
                    <span className={styles.span_termo}><b>Nome: </b>{restaurantName}</span>
                    <span className={styles.span_termo}><b>Descrição: </b>{description}</span>
                    <span className={styles.span_termo}><b>Localização: </b>{location}</span>
                    <span className={styles.span_termo}><b>Telefone: </b>{phone}</span>
                    <span className={styles.span_termo}><b>Contatos: </b>{contact}</span>
                    <span className={styles.span_termo}><b>Horários: </b>{schedule}</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
<<<<<<< HEAD
            <div>
              <div>
                <form
                  action=""
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (confirm("Deseja confirmar alterações?")) {
                      handleUserEditSubmit({
                        id: userId,
                        email: email,
                        name: name,
                        password: password,
                        image: image,
                      });
                    }
                  }}
                >
                  <h1>Dados Pessoais:</h1>
=======
            <div className={styles.div_maior}>
              <div className={styles.div_sub} style={{marginRight: "25px"}}>
                <form action="">
                  <h1 className={styles.h1_prin}>Dados Pessoais:</h1>
>>>>>>> 57bc9efb (Estilizando pagina de edição de perfil)
                  <div className={styles.div_data}>
                    <span>
                      <img src={image} alt={name} />
                    </span>
                    <span className={styles.span_termo}>ID: {userId}</span>
                    <span>
                      <label htmlFor=""></label>
                      <input
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </span>
                    <span>
                      <label htmlFor=""></label>
                      <input
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </span>
                    <span>
                      <label htmlFor=""></label>
                      <input
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </span>
                    <span>
                      <label htmlFor=""></label>
                      <input
                        className={styles.input}
                        type="text"
                        value={image}
                        onChange={(event) => {
                          setImage(event.target.value);
                        }}
                      />
                    </span>
                  </div>
                  <button className={styles.button_edit} type="submit">Salvar mudanças</button>
                </form>
              </div>

              {isOwner && (
<<<<<<< HEAD
                <div>
                  <h1>Dados Restaurante:</h1>
                  <form
                    action=""
                    onSubmit={(event) => {
                      event.preventDefault();
                      if (confirm("Deseja confirmar alterações?")) {
                        handleRestaurantEditSubmit({
                          ownerEmail: email,
                          name: String(restaurantName),
                          location: String(location),
                          phone: String(phone),
                          contacts: String(contact),
                          description: String(description),
                          schedule: String(schedule),
                        });
                      }
                    }}
                  >
=======
                <div className={styles.div_sub} style={{marginRight: "25px"}}>
                  <h1 className={styles.h1_prin}>Dados Restaurante:</h1>
                  <form action="">
>>>>>>> 57bc9efb (Estilizando pagina de edição de perfil)
                    <div className={styles.div_data}>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          className={styles.input}
                          type="text"
                          value={restaurantName}
                          onChange={(event) => {
                            setRestaurantName(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          className={styles.input}
                          type="text"
                          value={description}
                          onChange={(event) => {
                            setDescription(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          className={styles.input}
                          type="text"
                          value={location}
                          onChange={(event) => {
                            setLocation(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          className={styles.input}
                          type="text"
                          value={phone}
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          className={styles.input}
                          type="text"
                          value={contact}
                          onChange={(event) => {
                            setContact(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          className={styles.input}
                          type="text"
                          value={schedule}
                          onChange={(event) => {
                            setSchedule(event.target.value);
                          }}
                        />
                      </span>
                    </div>
                    <button className={styles.button_edit} type="submit">Salvar mudanças</button>
                  </form>
                </div>
              )}
            </div>
          )}
          ;
          <button
            className={styles.button_edit}
            onClick={() => {
              setModoEdicao((prev) => !prev);
            }}
          >
            <img src="/images/icons/edit.svg" alt="" />
            <span className={styles.span_editar}>Editar</span>
          </button>
        </div>
      );
    }
  }
}
