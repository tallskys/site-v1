import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      This site was built with the teeth of long dead titans using magic that has been passed down through whispers.
    </div>
  </Container>
)

export default Footer
