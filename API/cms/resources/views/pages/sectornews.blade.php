

@extends('layouts.app')

@section('content')


  <div class="container">

    {{-- add content --}}
    <div class="row">
        
       <h6 class="display-6 fw-bold text-body-emphasis">Sector News</h6>

                   {{-- FEEDBACK --}}

            {{-- ERROR --}}
                      @if ($errors->any())
                          <div class="alert alert-danger mt-10" role="alert" >
                              <ul>
                                  @foreach ($errors->all() as $error)
                                      <li>{{ $error }}</li>
                                  @endforeach
                              </ul>
                          </div>
                      @endif

                     {{-- SUCCESS --}}
                    @if(session('success'))
                      <div
                        class="alert alert-success alert-dismissible fade show mt-8"
                        role="alert"
                      >
                        {{ session('success') }}
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>
                  @endif

                                       {{-- EXCEPTION --}}
                    @if(session('danger'))
                      <div
                        class="alert alert-danger alert-dismissible fade show mt-8"
                        role="alert"
                      >
                        {{ session('danger') }}
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>
                  @endif

             {{-- //////////////////////////////// --}}
       
       <!-- Button trigger modal -->
          <div class="col-md-4 mt-5">
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#servicemodal">
            <i class="fas fa-plus"></i>
              Add a News Post
            </button>
          </div>


            <!--Create Modal -->
            <div class="modal fade" id="servicemodal" tabindex="-1" aria-labelledby="servicemodalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="servicemodalLabel">Add a News Post</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{-- form --}}
                    <form method="POST" action="/create_news" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="title">News Title</label>
                        <input type="text" name="title" class="form-control" id="title">
                    </div>
                      <div class="form-group mt-2">
                        <label for="inputAddress">Category</label>
                        <select name="category" class="form-control" id="">
                            <option value="Sports">Sports</option>
                            <option value="Trending" selected>Trending</option>
                            <option value="Media">Media</option>
                            <option value="Tech">Tech</option>
                            <option value="Politics">Politics</option>
                            <option value="Tutorial">Tutorial</option>
                            <option value="Case studies">Case Studies</option>
                        </select>
                    </div>
                    <div class="mt-2 form-group">
                        <label for="body">Body</label>
                        <textarea name="body" class="richText form-control" rows="5"  id=""></textarea>
                    </div>
                      <div class="form-group my-2">
                        <label for="readtime">Estimated Read Time (Minutes)</label>
                        <input type="number" name="read_time" class="form-control" id="inputAddress">
                    </div>
                     <div class="form-group">
                        <label for="tags">Tags</label>
                        <input type="text" class="form-control" id="tags" name="tags" placeholder="FORMAT: sports,case studies">
                    </div>
         

                    <div class="mt-2 form-row">
                        <div class="form-group col-md-6">
                        <label for="featuredImage">Featured Image</label>
                        <input type="file" class="form-control" id="" name="featured_image">
                        </div>
                    </div>
                    <button type="submit" class="mt-3 btn btn-danger mx-auto">Publish</button>
                    </form>
                    {{-- ....... --}}
                </div>
                <div class="modal-footer">
                    <small class="mx-auto">Data submitted here is published automatically on the main website</small>
                </div>
                </div>
            </div>
            </div>

            {{-- end of modal --}}


            <!--Edit Modal -->
            <div class="modal fade" id="newseditmodal" tabindex="-1" aria-labelledby="newseditmodalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="newseditmodalLabel">Edit News Post</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{-- form --}}
                    <form method="POST" action="/create_news" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="title">News Title</label>
                        <input type="text" name="title" class="form-control" id="edit_title">
                    </div>
                    <input type="hidden" value="" class="form-control" id="news_id" >
                      <div class="form-group mt-2">
                        <label for="inputAddress">Category</label>
                        <select name="category" class="form-control" id="edit_category">
                            <option value="Sports">Sports</option>
                            <option value="Trending" selected>Trending</option>
                            <option value="Media">Media</option>
                            <option value="Tech">Tech</option>
                            <option value="Politics">Politics</option>
                            <option value="Tutorial">Tutorial</option>
                            <option value="Case studies">Case Studies</option>
                        </select>
                    </div>
                    <div class="mt-2 form-group">
                        <label for="body">Body</label>
                        <textarea name="body" class="richText form-control" rows="5"  id="edit_body"></textarea>
                    </div>
                      <div class="form-group my-2">
                        <label for="readtime">Estimated Read Time (Minutes)</label>
                        <input type="number" name="read_time" class="form-control" id="edit_readtime">
                    </div>
                     <div class="form-group">
                        <label for="tags">Tags</label>
                        <input type="text" class="form-control" id="edit_tags" name="tags" placeholder="FORMAT: sports,case studies">
                    </div>
         

                    <div class="mt-2 form-row">
                        <div class="form-group col-md-6">
                        <label for="featuredImage">Featured Image</label>
                        <input type="file" class="form-control" id="edit_featuredImage" name="featured_image">
                        </div>
                    </div>
                    <button type="submit" class="mt-3 btn btn-danger mx-auto">Publish</button>
                    </form>
                    {{-- ....... --}}
                </div>
                <div class="modal-footer">
                    <small class="mx-auto">Data submitted here is published automatically on the main website</small>
                </div>
                </div>
            </div>
            </div>

            {{-- end of modal --}}


          
    </div>


   <div class="row">
{{-- table --}}
<table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">News Title</th>
      <th scope="col">Category</th>
      <th scope="col">Date</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      <!-- #region -->

      @foreach ($news as $post)
          <tr>
            <th scope="row">{{$loop->iteration}}</th>
            <td>{{$post->title}}</td>
            <td><span class="badge text-bg-danger rounded-pill">{{$post->category}}</span></td>
            <td><small>{{$post->created_at}}</small></td>
            <td>
              {{-- edit --}}
                <a href="#"  
                  data-bs-toggle="modal" 
                  data-bs-target="#newseditmodal"
                  data-id="{{ $post->id }}"
                  data-title="{{ $post->title }}"
                  data-category="{{ $post->category }}"
                  data-read_time="{{ $post->read_time }}"
                  data-tags="{{ implode(',', $post->tags) }}"
                  data-body='@json($post->body)'>
                  <i class="fas fa-pen"></i>
               </a> 
              {{-- delete --}}
              <form id="delete-form-{{ $post->id }}" action="/delete_news/{{ $post->id }}" method="POST" style="display:inline;">
                @csrf
                @method('DELETE')
              </form>
              <i class="fas fa-trash mx-3" onclick="document.getElementById('delete-form-{{ $post->id }}').submit();"></i></td>
          </tr>
      @endforeach

  </tbody>
</table>
{{-- ---- --}}
   </div>


  </div>


 <script>
  tinymce.init({
    selector: 'textarea.richText',
    license_key: 'gpl',
    plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table emoticons wordcount',
    toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | preview fullscreen',
    menubar: false,
    branding: false,
    height: 300,
    toolbar_mode: 'wrap' ,
   
    init_instance_callback: function (editor) {
        console.log('TinyMCE initialized:', editor.id);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const editModal = document.getElementById('newseditmodal');
    
    editModal.addEventListener('show.bs.modal', e => {
        const btn = e.relatedTarget;
        const id = btn.dataset.id;
        const title = btn.dataset.title;
        const read_time = btn.dataset.read_time;
        const tags = btn.dataset.tags;
        const category = btn.dataset.category;
        const body = JSON.parse(btn.dataset.body); 

        // Grab the form and its fields
        const form = editModal.querySelector('form');
        const title_input = document.getElementById('edit_title');
        const tags_input = document.getElementById('edit_tags');
        const read_time_input = document.getElementById('edit_readtime');
        const category_input = document.getElementById('edit_category');
        const body_textarea = document.getElementById('edit_body');

       
        form.action = `/edit_news/${id}`;

        
        let id_input = document.getElementById('news_id');
        if (!id_input) {
            id_input = document.createElement('input');
            id_input.type = 'hidden';
            id_input.name = 'id';
            id_input.id = 'news_id';
            form.appendChild(id_input);
        }
        id_input.value = id;

        title_input.value = title;
        tags_input.value = tags;
        read_time_input.value = read_time;
        category_input.value = category;

        // Handling TinyMCE content population
        setTimeout(() => {
            const editor = tinymce.get('edit_body');
            if (editor) {
                editor.setContent(body);
            } else {
                // Fallback: textarea value directly
                body_textarea.value = body;
                // TinyMCE if needed
                tinymce.init({
                    selector: '#edit_body',
                    license_key: 'gpl',
                    plugins: 'lists',
                    toolbar: 'undo redo | bold italic | bullist numlist | link image | code fullscreen',
                    menubar: false,
                    branding: false,
                    height: 300,
                    setup: function(editor) {
                        editor.on('init', function() {
                            editor.setContent(body);
                        });
                    }
                });
            }
        }, 100);
    });

    // Cleaning up TinyMCE when modal closes
    editModal.addEventListener('hidden.bs.modal', function() {
        const editor = tinymce.get('edit_body');
        if (editor) {
            editor.remove();
        }
    });
});
 </script>

@include('layouts.footer')
@endsection