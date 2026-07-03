(async (productsSelector, productPath, productTypeSelector, markSelector, formName) => {
            await GenerateHeader()
            await GenerateFooter()
            await GenerateItemPage(productsSelector, productPath, productTypeSelector, markSelector, formName)
        })('Припои и сплавы', '/pripoi', 'Оловянно-свинцовые', 'Пос-40', 'Трубка')
