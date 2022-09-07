import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

type Props = {}

const DetailedArticle: NextPage = (props: Props) => {
  const router = useRouter()
  const { slug } = router.query

  return <div>{slug}</div>
}

export default DetailedArticle
