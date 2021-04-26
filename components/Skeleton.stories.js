export default {
    title: 'Skeleton',
    argTypes: {
      type: {
        control: {
          type: 'radio',
          options: ['repository']
        }
      }
    }

  }
  
  export const Repository = () => '<Skeleton type="repository"/>'
  