//�ϐ�����
�@//�L�����o�X�E�`�ʏ��
�@var canvas = document.getElementById('canvas');
�@var ctx = canvas.getContext('2d');

  //�}�E�X�ʒu���imousex, mousey�j
  var mousex, mousey;

  //���݃N���b�N��Ԃ̕ϐ��itrue��ON�Afalse��OFF�j
  var state = false;

//�C�x���g�̏����ݒ�
onRadioButtonChange();

//�֐�����

    //���W�I�{�^�����I�����ꂽ��̏����֐�
    function onRadioButtonChange(){

        //���ݐݒ肳��Ă���C�x���g��S�Ė�����
      �@canvas.removeEventListener('mousedown', pen_mousedown , { passive: true });
 �@     canvas.removeEventListener('mousemove', pen_mousemove , { passive: true });
      �@canvas.removeEventListener('mouseup', pen_mouseup , { passive: true });
        canvas.removeEventListener("click", square_mouseclick , { passive: true });
        canvas.removeEventListener("click", triangle_mouseclick, { passive: true });
        canvas.removeEventListener("click", maru_mouseclick, { passive: true });

�@�@�@�@//���W�I�{�^�������擾����
    �@  radiobtn1 = document.getElementById("Radio_pen");
    �@  radiobtn2 = document.getElementById("Radio_square");
    �@  radiobtn3 = document.getElementById("Radio_triangle");
      �@radiobtn4 = document.getElementById("Radio_maru");
�@

    �@  if (radiobtn1.checked == true) {

        �@�@�@console.log("���݁A�y���@�\���I������Ă��܂�");

      �@�@�@�@canvas.addEventListener('mousedown', pen_mousedown );
 �@   �@�@�@�@canvas.addEventListener('mousemove', pen_mousemove );
      �@�@�@�@canvas.addEventListener('mouseup', pen_mouseup );

     �@ }else if (radiobtn2.checked == true){

 �@   �@�@�@�@console.log("���݁A���X�^���v�@�\���I������Ă��܂�");
 �@   �@�@�@�@canvas.addEventListener('click', square_mouseclick );

    �@  }else if (radiobtn3.checked == true){

 �@   �@�@�@�@console.log("���݁A���X�^���v�@�\���I������Ă��܂�");
 �@   �@�@�@�@canvas.addEventListener('click', triangle_mouseclick );

      �@}else if (radiobtn4.checked == true){

 �@   �@�@�@�@console.log("���݁A���X�^���v�@�\���I������Ă��܂�");
 �@   �@�@�@�@canvas.addEventListener('click', maru_mouseclick );

     �@ }

    }

//�N���b�N�C�x���g
//�y���@�\
�@//mousedown���̃C�x���g
�@function pen_mousedown(e) {

�@�@�@�@ //�N���b�N�����ʒu���擾����
         mousex = e.offsetX;
         mousey = e.offsetY;

         //�N���b�N���Ă�����ON�ɂ���istate��true�ɂ���j
  �@�@ �@state = true; // �N���b�N��Ԃ�ON

�@}

  //mousemove���̃C�x���g
�@function pen_mousemove(e) {

�@ �@�@�@//�N���b�N����ĂȂ���������s���Ȃ�
�@ �@�@�@if(!state) return;

�@ �@�@�@//�N���b�N����Ă�����ȉ������s 
�@ �@�@�@ctx.lineWidth = 4.0;                  //���̑���
�@ �@�@�@ctx.strokeStyle =  "#6F8174";   //���̃J���[
�@ �@�@�@ctx.lineCap = 'round';              �@ //���̗��[�Ɋۂ݂�t���ăX���[�Y�ȕ`��ɂ���

�@ �@�@�@ctx.beginPath();�@�@                   //�p�X�����Z�b�g����B
�@ �@�@�@ctx.moveTo(mousex, mousey); �@�@�@     //�p�X�̊J�n���W���N���b�N�����_�ɂ���
�@ �@�@�@ctx.lineTo(e.offsetX, e.offsetY); �@   //�����n�߂̈ʒu����}�E�X�̈ʒu�܂Ő�������
�@ �@�@�@ctx.stroke();�@�@�@�@�@�@�@�@�@�@�@�@  //���݂̃p�X��֊s�\������

�@ �@�@�@//���O�̃}�E�X���W���X�V
�@ �@�@�@mousex = e.offsetX;
�@ �@�@�@mousey = e.offsetY;

�@}

  //mauseup���̃C�x���g�@
�@function pen_mouseup(){

�@ �@�@�@//�N���b�N����߂�ƃN���b�N��Ԃ�OFF�ɂ���
�@ �@�@�@state = false;

�@}


//�X�^���v���@�\
  //click���Ɂ��X�^���v������
�@function square_mouseclick(e) {

�@�@�@�@ //�N���b�N�����ʒu���擾����
         mousex = e.offsetX;
         mousey = e.offsetY;

	 ctx.beginPath ();	                 // �p�X�����Z�b�g

         //�N���b�N���Ă����ʒu�Ɂ�������
         ctx.fillStyle="green";                       �@�@//�h��Ԃ��̐F��ԂɎw��
         ctx.fillRect( mousex+5 , mousey+5 , 20, 20); �@//1��10px�́��̃X�^���v
   }

//�X�^���v���@�\
  //click���Ɂ��X�^���v������
�@function triangle_mouseclick(e) {

�@�@�@�@ //�N���b�N�����ʒu���擾����
         mousex = e.offsetX;
         mousey = e.offsetY;

         //�N���b�N���Ă����ʒu�Ɂ�������
         ctx.beginPath();
	 ctx.moveTo(mousex, mousey);           //�ŏ��̓_�̏ꏊ
	 ctx.lineTo(mousex+10 , mousey+10 );   //2�Ԗڂ̓_�̏ꏊ
	 ctx.lineTo(mousex-10 , mousey+10);    //3�Ԗڂ̓_�̏ꏊ
	 ctx.closePath();	               //�O�p�`�̍Ō�̐� close������

	 ctx.strokeStyle = "rgb(0,0,0)";       //�g���̐F
	 ctx.stroke();                         

	 ctx.fillStyle="rgba(0,0,255,0.1)";//�h��Ԃ��̐F
	 ctx.fill();

   }

//�X�^���v���@�\
  //click���Ɂ��X�^���v������
�@function maru_mouseclick(e) {

�@�@�@�@ //�N���b�N�����ʒu���擾����
         mousex = e.offsetX;
         mousey = e.offsetY;

	 ctx.beginPath ();	                 // �p�X�����Z�b�g

	 // ���S(mousex,mousey)�Ŕ��a: 10�̉~
	 ctx.arc( mousex ,mousey , 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false);

	 ctx.fillStyle = "rgba(255,0,0,0.8)" ;	  // �h��Ԃ��̐F
	 ctx.fill(); 
	 ctx.strokeStyle = "skyblue" ;	          // ���̐F
	 ctx.lineWidth = 8 ;                      // ���̑���

	 // ����`������s
	 ctx.stroke() ;

	 ctx.fillStyle="rgba(0,0,255,0.1)";//�h��Ԃ��̐F
	 ctx.fill();


�@}






