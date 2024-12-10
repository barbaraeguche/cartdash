from pymongo import MongoClient

def mongo_connect():
    """
    this function connects to the mongo database.
    :return: database or none if an error occurs
    """
    try:
        client = MongoClient(host='localhost', port=27017)
        return client['cartdash']
    except Exception as exp:
        print(f"Error connecting to mongodb: {exp}")
        return False

database = mongo_connect()

if database is not None:
    collections = database['groceries']

    def get_groceries() -> list[dict] | bool:
        """
        this function retrieves all grocery items from the database.
        :return: a list of dictionaries of groceries
        """

        try:
            return list(collections.find({}, { '_id': False }))
        except Exception as exp:
            print(f"Retrieval Error: {exp}")
            return False

    def add_grocery(latter: str) -> bool:
        """
        this function adds a new grocery item to the database.

        :param latter: the item to add
        :return: None
        """

        try:
            duplicate = collections.find_one({ 'item': latter }, { '_id': False, 'hasPurchased': False })

            # if the item already exists, do nothing
            if duplicate: return

            # insert into the database, and return True
            collections.insert_one({ 'item': latter, 'hasPurchased': False })
            return True
        except Exception as exp:
            print(f"Addition Error: {exp}")
            return False

    def update_grocery(former: str, latter: str) -> bool:
        """
        this function updates a grocery item in the database.

        :param former: the previous item
        :param latter: the current item

        :return: None
        """

        try:
            collections.update_one({ 'item': former }, { '$set': { 'item': latter } })
            return True
        except Exception as exp:
            print(f"Updating Error: {exp}")
            return False

    def delete_grocery(former: str) -> bool:
        """
        this function deletes a grocery item from the database.

        :param former: the item to delete
        :return: None
        """

        try:
            collections.delete_one({ 'item': former })
            return True
        except Exception as exp:
            print(f"Deletion Error: {exp}")
            return False
