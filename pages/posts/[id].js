import Layout from '../../components/layout'

export default function Post(){
  return <Layout>...</Layout>
}

export async function getStaticPaths(){
  // return a list of possible value for id
}

export async function getStaticProps({params}) {
  // fetch necessary data fro the blog post using params.id
}