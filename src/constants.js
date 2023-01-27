const constants = {
  pages: {
    weather: {
      form: {
        initialData: {
          city: '',
          units: 'metric',
          lang: 'en'
        },
        stages: [
          [
            {
              tagName: 'textarea',
              label: "Choose a city:",
              attributes: {
                name: 'city',
                id: 'city',
                placeholder: 'eg: London'
              }
            }
          ],
          [
            {
              tagName: 'input',
              label: "units:",
              attributes: {
                className: 'special',
                type: 'text',
                name: 'units',
                id: 'units'
              }
            },
            {
              tagName: 'input',
              label: "language:",
              attributes: {
                type: 'text',
                name: 'lang',
                id: 'lang'
              }
            }
          ]
        ]
      }
    }
  }
}

export default constants
