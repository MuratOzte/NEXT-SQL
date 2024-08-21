import pool from '@/lib/db';

export default function Home() {
    const user = {
        id: 7,
        name: 'Bali',
        surname: 'Deli',
        location: 'Kankara',
    };

    const fetchData = async () => {
        try {
            const client = await pool.connect();
            console.log('connected');
            const result = await client.query('SELECT * FROM public.user');
            const response = await client.query(
                'INSERT INTO public.user (id, name, surname, location) VALUES ($1, $2, $3, $4)',
                [user.id, user.name, user.surname, user.location]
            );
            console.log(response);
            console.log(result.rows);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();

    return <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </form>;
}
