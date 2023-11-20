import { MetadataRoute } from 'next'

export default function sitemap() {
	return [
		{
			url: 'https://hexen.lt',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://hexen.lt/apie',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://hexen.lt/kontaktai',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	]
}
