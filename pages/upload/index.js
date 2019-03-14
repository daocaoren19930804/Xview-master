// pages/upload/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    limit:5,
    urlList1:['/static/logo.png'],
    urlList2: ['/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png']
  },
  /**
   * 图片删除时间
   */
  delFile1: function (e) {
    let array = this.data
    array.urlList1.splice(e.detail.index, 1)
    this.setData(array)
  },
  delFile2:function(e){
    let array = this.data
    array.urlList2.splice(e.detail.index, 1)
    this.setData(array)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})