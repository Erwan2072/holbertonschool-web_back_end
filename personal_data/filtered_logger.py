import re

def filter_datum(fields, redaction, message, separator):
    """
    Returns the log message obfuscated by replacing field values with a redacted string.
    """
    pattern = f'({"|".join(fields)})=[^\{separator}]*'
    return re.sub(pattern, lambda m: f"{m.group(1)}={redaction}", message)

class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields=None):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields if fields else []

    def format(self, record: logging.LogRecord) -> str:
        record.msg = filter_datum(self.fields, self.REDACTION, record.msg, self.SEPARATOR)
        return super().format(record)

PII_FIELDS = ("name", "email", "phone", "ssn", "password")

def get_logger() -> logging.Logger:
    """Creates and configures a logger named 'user_data'"""
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False
    handler = logging.StreamHandler()
    handler.setFormatter(RedactingFormatter(fields=PII_FIELDS))
    logger.addHandler(handler)
    return logger

def get_db() -> mysql.connector.connection.MySQLConnection:
    """Returns a connector to the database"""
    return mysql.connector.connect(
        host=os.getenv("PERSONAL_DATA_DB_HOST", "root"),
        database=os.getenv("PERSONAL_DATA_DB_NAME", "root"),
        user=os.getenv("PERSONAL_DATA_DB_USERNAME", "root"),
        password=os.getenv("PERSONAL_DATA_DB_PASSWORD", ""))
