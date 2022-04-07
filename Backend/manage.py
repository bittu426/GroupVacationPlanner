

import src.app
import src.models


# if needed, generate database schema
session = src.models.Session()


@src.app.cli.command("recreate_db")
def recreate_db():
    src.models.Base.metadata.drop_all(src.models.engine)
    src.models.Base.metadata.create_all(src.models.engine)

@src.app.cli.command("create_db")
def create_db():
    src.models.Base.metadata.create_all(src.models.engine)

@src.app.cli.command("seed_db")
def seed_db():
    session.add(src.models.User(email="asearle@g.clemson.edu",first_name="Adrian",last_name="Searles",username="asearle",password="Pspgame12"))
    session.commit()


if __name__ == "__main__":
    src.app.cli()