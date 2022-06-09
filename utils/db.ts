import { connect, ConnectionStates } from "mongoose"

const conn = {
    isConnected: 0
};

export const dbConnnect = async () =>{
    if(conn.isConnected == 1) return;

    const db = await connect(process.env.MONGO_URL || '');    
    conn.isConnected = db.connections[0].readyState;
    console.log(db.connection.db.databaseName);
};