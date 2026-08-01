from pathlib import Path
import xml.etree.ElementTree as ET

plan = Path('tests/load/jmeter/http-smoke.jmx')
ET.parse(plan)
print(f'JMeter plan is valid XML: {plan}')
