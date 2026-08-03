class Database:

    async def connect(self):
        print("Database Connected")

    async def disconnect(self):
        print("Database Disconnected")


db = Database()
