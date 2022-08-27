import Header from '../components/Header'
import Layout from '../components/Layout'
import Navbar2 from '../components/Navbar2'
import Section from '../components/Section'
import Section2 from '../components/Section2'
import Form from '../components/Form'

export default function Home () {
  return (
    <>
      <Layout>

        <Navbar2 />
        <Header />
        <br />
        <br />
        <Section />
        <hr />
        <br />
        <Section2 />
        <hr />
        <Form />

      </Layout>

    </>
  )
}
