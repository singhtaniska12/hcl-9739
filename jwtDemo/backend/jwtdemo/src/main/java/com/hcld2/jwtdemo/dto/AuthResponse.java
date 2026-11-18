package com.hcld2.jwtdemo.dto;

import jakarta.validation.constraints.NotBlank;

public record  AuthResponse(@NotBlank String token , @NotBlank String username ) {
}
