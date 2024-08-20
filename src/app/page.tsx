import pool from '@/lib/db';

export default function Home() {
    const fetchData = async () => {
        try {
            const client = await pool.connect();
            console.log('connected');
            const result = await client.query('SELECT * FROM public.user');
            console.log(result.fields);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();

    return <div>Merhaba</div>;
}
