import styles from './Landing.module.css';

const Landing = () => {
    return (
        <div className={styles.container}>
            <section>
                <h1 className={styles.title}>BIENVENIDOS A PENT MUSIC STUDIOS</h1>
            </section>
            <div className={styles.body}>
                <section className={styles.resume}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quasi numquam, at inventore vitae delectus! Ipsam ut et debitis perferendis similique explicabo tempore commodi maxime, voluptatibus esse expedita maiores culpa.
                    </p>
                </section>
                <section className={styles.logo}>
                    <img src="logo512.png" alt="Pent Music Logo" />
                    {/* no sta renderizando la imagen */}
                </section>
            </div>

        </div>
    )
};

export default Landing;