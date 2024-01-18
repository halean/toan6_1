function SaySomething({title, content}){
    return (
        <div class="flex-1 p-10 overflow-y-auto max-w-3xl">
            <h2 class="text-2xl font-bold mb-5">{title}</h2>
            {content}
        </div>
    )
}
function Python(){
    return (
        SaySomething({title:"Tại sao Python", content:`
            Python thường được coi là "tiếng mẹ đẻ" của trí tuệ nhân tạo (AI) hiện đại. 
            Lý do chính là do sự phổ biến của Python trong cộng đồng nghiên cứu và phát triển AI, 
            cũng như sự hỗ trợ mạnh mẽ từ thư viện và frameworks dành cho AI và học máy 
            (machine learning). Python cung cấp một cú pháp dễ hiểu, linh hoạt và có thể 
            tích hợp được nhiều công cụ và thư viện tiên tiến như TensorFlow, PyTorch, 
            Keras, và Scikit-learn, giúp đẩy nhanh quá trình phát triển và nghiên cứu 
            trong lĩnh vực AI.`})
    );
}
function MongMuon(){
    return (
            SaySomething({title:"Mong muốn", content:`
            Trang web này được phát triển với mong muốn giới thiệu ngôn ngữ lập trình Python 
            cho học sinh lớp sáu thông qua việc giải các bài toán trong chương trình. Hy vọng 
            đây là một phương pháp học tập thực tiễn và hấp dẫn, giúp học sinh tiếp cận với 
            lập trình một cách tự nhiên và thú vị. Sử dụng Python để giải các bài toán lớp sáu 
            không chỉ giúp học sinh phát triển kỹ năng lập trình mà còn cải thiện khả năng 
            giải quyết vấn đề và tư duy logic của các bạn đó. Qua đó, học sinh có thể học cách 
            áp dụng công nghệ vào việc học các môn học khác và phát triển một niềm đam mê với 
            lập trình từ sớm.`}
            )
    );
}
function ToanLopSau(){
    return (
        SaySomething({title:"Toán lớp sáu", content:
        <div class="markdown prose w-full break-words dark:prose-invert light"><p>Toán lớp sáu 
        đóng một vai trò quan trọng trong nền giáo dục cơ bản vì nhiều lý do:</p><ol><li><p>
        <strong>Nền tảng Toán học Cơ bản</strong>: Toán lớp sáu thường bao gồm các khái niệm 
        cơ bản như số học, phân số, số thập phân, tỷ lệ phần trăm, hình học, và đại số cơ bản.
         Những kiến thức này là nền tảng quan trọng cho sự hiểu biết sâu hơn về toán học ở 
         các cấp độ cao hơn.</p></li><li><p><strong>Phát triển Tư duy Logic và Giải quyết 
         Vấn đề</strong>: Toán lớp sáu giúp học sinh phát triển kỹ năng tư duy logic, giải 
         quyết vấn đề, và suy luận. Những kỹ năng này không chỉ quan trọng trong học tập mà 
         còn cần thiết trong cuộc sống hàng ngày.</p></li><li><p><strong>Ứng dụng Trong 
         Cuộc Sống</strong>: Các khái niệm học được trong toán lớp sáu thường có nhiều ứng 
         dụng thực tế, từ việc quản lý tài chính cá nhân đến việc hiểu các vấn đề khoa học 
         và kỹ thuật.</p></li><li><p><strong>Chuẩn bị cho Học Toán ở Cấp Cao Hơn</strong>: 
         Hiểu biết vững chắc về toán lớp sáu tạo điều kiện thuận lợi cho việc học toán ở cấp 
         độ cao hơn, như trung học cơ sở và trung học phổ thông.</p></li><li><p><strong>Phát 
         triển Kỹ năng Số học và Phân tích</strong>: Toán lớp sáu cũng giúp học sinh phát 
         triển kỹ năng số học và phân tích, quan trọng cho hầu hết các ngành học và nghề 
         nghiệp.</p></li><li><p><strong>Khơi gợi Niềm đam mê Học tập</strong>: Đối với 
         nhiều học sinh, toán lớp sáu là giai đoạn họ bắt đầu khám phá và phát triển một 
         niềm đam mê đối với toán học và các lĩnh vực liên quan.</p></li></ol><p>Do đó, 
         toán lớp sáu không chỉ là một phần quan trọng của chương trình học mà còn là nền 
         tảng cho sự phát triển cá nhân và học thuật của học sinh.</p></div>
        })
    )
}
export {Python, MongMuon, ToanLopSau} 