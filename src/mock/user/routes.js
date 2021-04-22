import Mock from 'mockjs'

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/routes`, 'get', () => {
  let result = {}
  result.code = 0
  result.data = [{
    router: 'root',
    children: [
      {
        router: 'swsbb',
        children: [
          'zzs', 'qysds'
        ],
      },
      {
        router: 'swfxgl',
        children: [
          'analysis1', 'analysis2'
        ],
      },
    ]
  }]
  return {success: true, data:result, message:''}
})
