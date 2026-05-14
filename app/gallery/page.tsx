import { client } from '@/lib/sanity'

async function getProducts() {
  return client.fetch(`*[_type == "product"]`)
}

export default async function GalleryPage() {
  const products = await getProducts()

  return (
    <main className="min-h-screen bg-[#F7F1EA] p-10">
      <h1 className="text-5xl mb-12 text-center">Gallery</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div key={product._id} className="bg-white rounded-3xl overflow-hidden">
            <div className="aspect-[4/5] bg-neutral-200" />

            <div className="p-6">
              <h2 className="text-2xl mb-2">{product.title}</h2>
              <p className="text-black/70">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
