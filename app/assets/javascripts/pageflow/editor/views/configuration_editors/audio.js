pageflow.ConfigurationEditorView.register('audio', {
  configure: function() {
    this.tab('general', function() {
      this.group('general');

      this.input('additional_title', pageflow.TextInputView);
      this.input('additional_description', pageflow.TextAreaInputView, {size: 'short'});
    });

    this.tab('files', function() {
      this.input('audio_file_id', pageflow.FileInputView, {collection: pageflow.audioFiles});
      this.input('background_image_id', pageflow.FileInputView, {collection: pageflow.imageFiles});
    });

    this.tab('options', function() {
      this.group('options');
    });
  }
});