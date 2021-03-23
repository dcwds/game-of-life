const randomSeed = (width, height) => {
  let seed = []

  while (height > 0) {
    seed.push(
      Array(width)
        .fill(null)
        .map((v) => Math.floor(Math.random() * 2))
    )

    height--
  }

  return seed
}

export default randomSeed
