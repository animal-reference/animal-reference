# data

## Initial setup

1. Install [pyenv](https://github.com/pyenv/pyenv)
2. `pyenv install -s`
3. `python -m venv env`
4. `. env/bin/activate`
5. `pip install -r requirements.txt`

## Download input data

1. `curl -O --output-dir input https://bulks-faostat.fao.org/production/Production_Crops_Livestock_E_All_Data.zip `
2. `unzip input/Production_Crops_Livestock_E_All_Data.zip -d input` 

## Update output data

1. `python main.py`
