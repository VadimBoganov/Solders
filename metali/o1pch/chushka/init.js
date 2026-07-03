(async (productsSelector, productPath, productTypeSelector, markSelector, formName) => {
            await GenerateHeader()
            await GenerateFooter()
            await GenerateItemPage(productsSelector, productPath, productTypeSelector, markSelector, formName)
        })('Металлы', '/metali', 'Олово', 'О1пч', 'Чушка')
