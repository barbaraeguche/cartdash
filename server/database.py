from pymongo import MongoClient
from dotenv import load_dotenv
import os

# load environment variables from .env file
load_dotenv()

# global mongodb configurations
mongo_uri = os.getenv('MONGO_URI')
mongo_db = os.getenv('DATABASE')
mongo_collection = os.getenv('COLLECTION')

def mongo_connect():
    """
    this function connects to the mongo database.
    :return: database or none if an error occurs
    """
    try:
        client = MongoClient(mongo_uri)
        # send a ping to confirm a successful connection
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")

        return client[mongo_db]
    except Exception as exp:
        print(f"Error connecting to mongodb: {exp}")
        return None

database = mongo_connect()

if database is not None:
    collections = database[mongo_collection]

    def get_groceries() -> list[dict] | str:
        """
        this function retrieves all grocery items from the database.
        :return: a list of dictionaries of groceries, otherwise False if an error occurs
        """

        try:
            return list(collections.find({}, { '_id': False }))
        except Exception as exp:
            return f'Database retrieval error: {exp}'

    def add_grocery(new_item: str) -> str:
        """
        this function adds a new grocery item to the database.

        :param new_item: the item to add
        :return: confirmation message, otherwise False if an error occurs
        """

        try:
            duplicate = collections.find_one({ 'item': new_item }, { '_id': False })

            # if the item already exists, do nothing
            if duplicate: return 'Item already exists in your list.'

            # insert into the database
            collections.insert_one({ 'item': new_item })
            return 'Item inserted into database.'
        except Exception as exp:
            return f'Database addition error: {exp}'

    def update_grocery(former: str, latter: str) -> str:
        """
        this function updates a grocery item in the database.

        :param former: the previous item
        :param latter: the current item

        :return: confirmation message, otherwise False if an error occurs
        """

        try:
            duplicate = collections.find_one({ 'item': latter }, { '_id': False })

            # if the item already exists, do nothing
            if duplicate: return 'Item already exists in your list.'

            # update item in the database
            collections.update_one({ 'item': former }, { '$set': { 'item': latter } })
            return 'Item updated in database.'
        except Exception as exp:
            return f'Database updating error: {exp}'

    def delete_grocery(former: str) -> str:
        """
        this function deletes a grocery item from the database.

        :param former: the item to delete
        :return: confirmation message, otherwise False if an error occurs
        """

        try:
            collections.delete_one({ 'item': former })
            return 'Item deleted from database.'
        except Exception as exp:
            return f'Database deletion error: {exp}'
