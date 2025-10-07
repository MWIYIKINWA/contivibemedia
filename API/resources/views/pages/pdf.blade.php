
@extends('layouts.app')

@section('title', 'Portfolio PDF Document')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
              

                <div class="card-body">
                    @if (session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif

                    @if ($document)
                        <div class="mb-4">
                            <h5>Current Document</h5>
                            <div class="d-flex justify-content-between align-items-center p-3 border rounded">
                                <div>
                                    <i class="fas fa-file-pdf text-danger fa-2x me-3"></i>
                                    <span>{{ $document->original_name }}</span>
                                    <small class="text-muted d-block">
                                        {{ number_format($document->file_size / 1024, 2) }} KB
                                    </small>
                                </div>
                                <div>
                                    <a href="{{ route('pdf-document.view') }}" 
                                       target="_blank" 
                                       class="btn btn-outline-primary btn-sm me-2">
                                        <i class="fas fa-eye"></i> View
                                    </a>
                                    <a href="{{ route('pdf-document.download') }}" 
                                       class="btn btn-outline-success btn-sm">
                                        <i class="fas fa-download"></i> Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endif

                    <div class="upload-section">
                        <h5>{{ $document ? 'Replace PDF Document' : 'Upload PDF Document' }}</h5>
                        <form action="{{ $document ? route('pdf-document.update') : route('pdf-document.store') }}" 
                              method="POST" 
                              enctype="multipart/form-data">
                            @csrf
                            @if($document)
                                @method('PUT')
                            @endif

                            <div class="mb-3">
                                <label for="pdf_file" class="form-label">Select PDF File</label>
                                <input type="file" 
                                       class="form-control @error('pdf_file') is-invalid @enderror" 
                                       id="pdf_file" 
                                       name="pdf_file" 
                                       accept=".pdf">
                                @error('pdf_file')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            <button type="submit" class="btn btn-danger">
                                <i class="fas fa-upload"></i> 
                                {{ $document ? 'Replace Document' : 'Publish Document' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection