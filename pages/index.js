export default function Home() {
  return <div>TEST</div>
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
