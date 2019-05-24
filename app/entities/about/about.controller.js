(function() {
    'use strict';

    angular
        .module('thientaidoanchuApp')
        .controller('AboutController', AboutController);


    AboutController.$inject = ['$scope', 'Principal', 'MEDIA_SERVER', '$translate', '$timeout', '$localStorage', '$sessionStorage', 'API_URL', '$http', 'QUESTION_CONTENT'];

    function AboutController ($scope, Principal, MEDIA_SERVER, $translate, $timeout, $localStorage, $sessionStorage, API_URL, $http, QUESTION_CONTENT) {

        var vm = this;

        $scope.title = "Sứ mệnh: Nơi du lịch khám phá trải nghiệm trọn vọn, Đạt Anh Hotel đạt tiêu chuẩn ba sao, một không gian nội thất hoàn hảo, tiện nghi, uy tín nhất của cố đô Huế.\n" +
            " Được khách hàng đánh giá cao, là điểm đến yêu thích của nhiều du khách";
        $scope.content="Nằm tọa lạc tại trung tâm thành phố, giúp quý khách thuận tiện và dễ dàng di chuyển để thăm quan các danh lam thắng cảnh tại đất cố đô.\n" +
            "+ Cách sân bay Phú Bài 16km\n" +
            "+ Cầu Tràng Tiền 3km\n" +
            "+ Bảo tàng cổ vật cung đình Huế 4km\n" +
            "+ Chùa Thiên Mụ: 2,8km\n" +
            "+ Chợ Đông Ba: 2,8km\n" +
            "Với hơn 90 phòng đạt tiêu chuẩn, chất lượng, được bố trí nội thất hài hòa, hợp lý; hệ thống dịch vụ tiện nghi, hiện đại; phong cách phục vụ chu đáo, chuyên nghiệp mang đến cho khách hàng cảm giác dễ chịu, thân tình và thoải mái như đang ở trong chính ngôi nhà của mình.\n" +
            "Đến đây du khách có thể thưởng thức hương vị đặc trưng của cố đô. Khách sạn có khu vực nhà hàng chuyên phục vụ các món ăn Á và truyền thống Việt Nam trong bầu không khí sang trọng, ấm cúng. Đồ ăn nhà hàng khách sạn được chế biến từ thực phẩm tươi ngon, an toàn cùng với đội ngũ cán bộ nhân viên chuyên nghiệp, thân thiện, chúng tôi luôn đảm bảo mang lại cho quý khách những món ăn chất lượng.\n" +
            "Với không gian rộng rãi, nhà hàng có thể đáp ứng được đoàn khách từ 600-700 người. Với các trang thiết bị, âm thanh, ánh sáng hiện địa và thuận lợi nhất, đây là địa điểm lý tưởng để tổ chức hội nghị, hội thảo, tiệc và các sự kiện sang trọng khác.\n" +
            "Ngoài ra, Đạt Anh hotel còn có của hàng chuyên bán các đặc sản xứ Huế: trà cung đình, mè xửng, tôm chua, mắm tép… Với mong muốn cho bạn được trải nghiệm tuyệt vời và dịch vụ lưu trú tốt trong chuyến đi.\n" +
            "Đạt Anh hotel sở hữu đội ngũ nhân viên được đào tạo chuyên nghiệp, phong cách phụ vụ đa dạng và luôn làm hài lòng đối với những khách hàng khó tính nhất. Sẽ tư vấn, hỗ trợ cho du khách những địa điểm thăm quan, vui chơi, khám phá di tích văn hóa cố đô với dịch vụ tốt, giá cả hợp lý\n" +
            "Với phương châm “ sự hài lòng của quý khách là uy tín của chúng tôi”, Đạt Anh hotel luôn tôn trọng khách hàng, thái độ đẹp, giá cả hợp lý, tiện nghi, là sự lựa chọn tốt nhất khi đi công tác, du lịch hay trải nghiệm lý thú.\n" +
            "Đạt Anh hotel- hành trình khám phá cố đô"
    }
})();
