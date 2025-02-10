import re

def filter_datum(fields, redaction, message, separator):
    """
    Returns the log message obfuscated by replacing field values with a redacted string.
    """
    pattern = f'({"|".join(fields)})=[^\{separator}]*'
    return re.sub(pattern, lambda m: f"{m.group(1)}={redaction}", message)
