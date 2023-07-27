import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '77acu38r',
  dataset: 'production',
  useCdn: true,
  token:
    'skai8sPFxPkWk2o3G6GDP0i3U7YRbAA6jT1l4I1jDIwuubA4f35ujkVBe9q5Sev50SZ58vLlw0d0e4vfgzSC0B0SOYPlMKG1Ux58fmvFDPcpHBd6yMJQ52WHDVzjLjvn2vNnDl5rEtESdShHukyyCnWWGiA5HJukczD29uGrOEmmgnodZPqL',
})
