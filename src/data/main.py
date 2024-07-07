import pandas as pd

if __name__ == '__main__':
    data = pd.read_csv(
        'input/Production_Crops_Livestock_E_All_Data_NOFLAG.csv')
    print(data.head())
